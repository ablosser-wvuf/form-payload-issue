'use client'

import Link from 'next/link'
import React from 'react'
import { Route } from 'next'

import { cn } from '@utilities/ui'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type MegaMenuProps = {
  megaMenuTriggerText: string
  megaMenuItems: MegaMenuItems[]
  icon?: React.JSX.Element
  className?: string
  triggerClasses?: string
  menuItemClasses?: string
}

export type MegaMenuItems = {
  categoryName: string
  items: {
    id: number
    itemName: string
    link: string
    description?: string
  }[]
}

export default function MegaMenu({
  megaMenuItems,
  megaMenuTriggerText,
  icon,
  className,
  triggerClasses,
  menuItemClasses,
}: MegaMenuProps) {
  //todo: figure out why this is being called a stupid number of times: could maybe be react's strictmode
  console.count(`rendering mega menu for files: ${megaMenuTriggerText}`)

  return (
    <NavigationMenuItem className={menuItemClasses}>
      <NavigationMenuTrigger className={triggerClasses}>
        {icon}
        {megaMenuTriggerText}
      </NavigationMenuTrigger>
      <NavigationMenuContent className={'overflow-y-scroll max-h-[calc(100vh-10rem)]'}>
        {megaMenuItems.map((megaMenuItems, index) => {
          return (
            <div key={megaMenuItems.categoryName} className={'pt-4 pl-4'}>
              <h3 className={'text-xl font-semibold leading-none tracking-tight'}>
                {megaMenuItems.categoryName}
              </h3>
              <ul
                className={cn(
                  'grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]',
                  className,
                )}
              >
                {' '}
                {/* changed gap and padding and dynamic cols */}
                {megaMenuItems.items.map((items) => (
                  <ListItem key={items.id} title={items.itemName} href={items.link}>
                    {items.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          )
        })}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
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
