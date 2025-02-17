'use client'

import * as React from 'react'
import Link from 'next/link'
import { Route } from 'next'

import { cn } from '@utilities/ui'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/files',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/files',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/files',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/files',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/files',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Tooltip',
    href: '/files',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const categories = ['Development', 'Finance', 'Operational', 'Development', 'Finance']

type MegaMenuMenuProps = {}

export default function MegaMenuTesting() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category, index) => {
          return (
            <NavigationMenuItem key={`category-${index}`}>
              <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
      {/*<Separator />*/}
    </NavigationMenu>
  )
}
const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link href={props.href! as Route} legacyBehavior passHref>
          <NavigationMenuLink>
            <span
              ref={ref}
              className={cn(
                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            </span>
          </NavigationMenuLink>
        </Link>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
