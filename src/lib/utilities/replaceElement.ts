export const replaceAnchorTagsWithButtons = (component: HTMLElement) => {
  // Select all anchor tags within the component, including those deeply nested
  const anchorTags = Array.from(component.querySelectorAll('a[role="button"]'))

  // Process each anchor tag, but check if it's still in the DOM before replacing
  anchorTags.forEach((element: Element) => {
    const anchor = element as HTMLAnchorElement

    // Check if the anchor is still in the DOM and has a parent
    // Also check if we've already processed this element
    if (!anchor.isConnected || !anchor.parentElement || anchor.dataset.buttonized) {
      return
    }

    // Mark this anchor as processed
    anchor.dataset.buttonized = 'true'

    // Create a new button element
    const button = document.createElement('button')

    // Copy all attributes including data attributes and event handlers
    Array.from(anchor.attributes).forEach((attr) => {
      try {
        button.setAttribute(attr.name, attr.value)
      } catch (e) {
        console.warn('Failed to copy attribute:', attr.name)
      }
    })

    // Preserve the exact HTML structure and content
    button.innerHTML = anchor.innerHTML

    // Copy all inline styles
    if (anchor.style.cssText) {
      button.style.cssText = anchor.style.cssText
    }

    // Copy computed styles
    const computedStyle = window.getComputedStyle(anchor)
    for (const prop of computedStyle) {
      try {
        button.style.setProperty(
          prop,
          computedStyle.getPropertyValue(prop),
          computedStyle.getPropertyPriority(prop),
        )
      } catch (e) {
        // Some styles might be read-only or not applicable to buttons
      }
    }

    // Set button specific attributes
    button.setAttribute('type', 'button')

    // Store the original click handler from the anchor
    const originalClick = anchor.onclick

    // Add click handler that simulates the original anchor behavior
    button.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()

      // If there's an original click handler, call it
      if (originalClick) {
        originalClick.call(anchor, event)
      }

      // Simulate a click on the original anchor
      anchor.click()
    })

    try {
      // Get the parent element again right before replacement
      const parent = anchor.parentElement
      if (parent) {
        // Keep the anchor in the DOM but hide it
        anchor.style.display = 'none'
        parent.insertBefore(button, anchor)
      }
    } catch (error) {
      console.warn('Failed to replace anchor with button:', error)
    }
  })
}

// How to use it:

// 1. Get the FormEngine component.  How you do this depends on
//    FormEngine's API.  It might be something like:
// const formEngineComponent = document.getElementById('myFormComponent'); // Or a more specific selector

// 2. Call the function, passing the component as an argument.
// replaceAnchorTagsWithButtons(formEngineComponent);

// Or, if you need to target a specific tab (like "Main_Tab" as in your previous question):

// const mainTab = formEngineComponent.querySelector('#Main_Tab');  // Or a more specific selector
// if (mainTab) {
//   replaceAnchorTagsWithButtons(mainTab);
// } else {
//   console.error("Main_Tab element not found.");
// }

// Example of how to use it with MutationObserver if the component is dynamically loaded:
// const targetNode = document.getElementById('formEngineContainer') // The parent container where FormEngine component is loaded

// const observer = new MutationObserver(function (mutationsList, observer) {
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       mutation.addedNodes.forEach((node) => {
//         if (node instanceof HTMLElement && node.id === 'myFormComponent') {
//           // Check if the FormEngine component is added
//           replaceAnchorTagsWithButtons(node)
//           observer.disconnect() // Disconnect after finding the component
//         }
//       })
//     }
//   }
// })

// const config = { childList: true, subtree: true } // Observe child list changes in the container and its descendants

// if (targetNode) {
//   observer.observe(targetNode, config) // Start observing
// }
