'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import MegaMenu from '@/components/custom/Layout/MegaMenu/MegaMenu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { cn } from '@utilities/ui'
import { signOut } from '@actions/auth/actions'
import { dummy_analytics_center_items, dummy_nav_file_items } from '@/lib/testData/testData'

import {
  DollarSign,
  AreaChart,
  BarChart4,
  Briefcase,
  CircleGauge,
  CircleUser,
  Files,
  FlaskConical,
  LifeBuoy,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  SunMoon,
  UserCog2,
} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import React, { useActionState, useState, useTransition } from 'react'
import { TextInputWithIcon } from '@/components/custom/Form/GenericFormComponents/TextInputWithIcon'

type NavigationProps = {}

// export default function Navigation({session, user}: NavigationProps) {
export default function Navigation({}: NavigationProps) {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const [isPending, startTransition] = useTransition()

  // const overrideDefaultCss = "!px-2 text-foreground/60";

  const overrideDefaultCss = '!px-2'

  // todo: fix mega menu anchor point for mobile menu

  return (
    <header className="sticky top-0 border-b bg-background w-full z-50">
      <div className="ml-auto mr-auto w-full">
        <div className={'container flex h-14 items-center gap-2'}>
          {/* begin Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>WVU Foundation</SheetTitle>
                <SheetDescription>hi</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
                {/*<div className="flex items-center gap-2 text-lg font-semibold">*/}
                {/*    <Annoyed className="h-6 w-6 mr-2"/>*/}
                {/*</div>*/}
                <Separator />
                <div className={'flex flex-1'}>
                  <NavigationMenu
                    orientation={'vertical'}
                    className={'flex max-w-full justify-start'}
                  >
                    <NavigationMenuList className={'flex flex-col space-x-0 gap-3 w-full'}>
                      {/* *****Mobile Dashboard***** */}
                      <NavigationMenuItem
                        className={'w-full'}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                      >
                        <Link href="/dashboard" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              `${navigationMenuTriggerStyle()}`,
                              'w-full justify-start',
                            )}
                          >
                            <CircleGauge className="mr-2 h-6 w-6" />
                            Dashboard
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      {/* *****Mobile Analytics Center***** */}
                      <MegaMenu
                        megaMenuTriggerText={'Analytics Center'}
                        megaMenuItems={dummy_analytics_center_items}
                        className={'grid-cols-2'}
                        triggerClasses={'w-full justify-start'}
                        menuItemClasses={'w-full'}
                        icon={<AreaChart className="mr-2 h-6 w-6" />}
                      />
                      {/* *****Mobile Daily Briefing***** */}
                      <NavigationMenuItem
                        className={'w-full'}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                      >
                        <Link href="/daily-briefing" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              `${navigationMenuTriggerStyle()}`,
                              'w-full justify-start',
                            )}
                          >
                            <Briefcase className="mr-2 h-6 w-6" />
                            Daily Briefing
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      {/* *****Mobile Files***** */}
                      <MegaMenu
                        megaMenuTriggerText={'Files'}
                        megaMenuItems={dummy_nav_file_items}
                        className={'grid-cols-2'}
                        triggerClasses={'w-full justify-start'}
                        menuItemClasses={'w-full'}
                        icon={<Files className="mr-2 h-6 w-6" />}
                      />
                      {/* *****Mobile Service Center***** */}
                      <NavigationMenuItem
                        className={'w-full'}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                      >
                        <Link href="/service-center" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              `${navigationMenuTriggerStyle()}`,
                              'w-full justify-start',
                            )}
                          >
                            <BarChart4 className="mr-2 h-6 w-6" />
                            Service Center
                            <Badge className="mx-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                              6
                            </Badge>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      {/* *****Mobile Test***** */}
                      <NavigationMenuItem
                        className={'w-full'}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                      >
                        <Link href="/test" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              `${navigationMenuTriggerStyle()}`,
                              'w-full justify-start',
                            )}
                          >
                            <FlaskConical className="mr-2 h-6 w-6" />
                            Test
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          {/* end Mobile menu */}
          <div className="hidden md:flex md:gap-2">
            <div className={'flex items-center gap-2'}>
              <img src={'/flyingwv.svg'} alt="Flying WV" className={'h-6 w-6'} />
              <div className={'hidden text-xl font-bold lg:inline-block'}>WVU Foundation</div>
            </div>
            {/* Begin nav menu with links */}
            <NavigationMenu className={'flex items-center gap-4 text-sm'}>
              <NavigationMenuList className={'space-x-0'}>
                {/* *****Dashboard***** */}
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${overrideDefaultCss}`}
                    >
                      {/*<CircleGauge className="mr-2 h-6 w-6"/>*/}
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* *****Analytics Center***** */}
                <MegaMenu
                  megaMenuTriggerText={'Analytics'}
                  megaMenuItems={dummy_analytics_center_items}
                  triggerClasses={overrideDefaultCss}
                  className={'md:grid-cols-3 md:w-[600px] lg:w-[800px]'}
                  // icon={<AreaChart className="mr-2 h-6 w-6"/>}
                />
                {/* *****Daily Briefing***** */}
                <NavigationMenuItem>
                  <Link href="/daily-briefing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${overrideDefaultCss}`}
                    >
                      {/*<Briefcase className="mr-2 h-6 w-6"/>*/}
                      Daily Briefing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* *****Files***** */}
                <MegaMenu
                  megaMenuTriggerText={'Files'}
                  megaMenuItems={dummy_nav_file_items}
                  triggerClasses={overrideDefaultCss}
                  // icon={<Files className="mr-2 h-6 w-6"/>}
                />
                {/* *****Service Center***** */}
                <NavigationMenuItem>
                  <Link href="/service-center" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${overrideDefaultCss}`}
                    >
                      {/*<BarChart4 className="mr-2 h-6 w-6"/>*/}
                      Services
                      {/*<Badge*/}
                      {/*    className="mx-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">*/}
                      {/*    6*/}
                      {/*</Badge>*/}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* *****Form Builder***** */}
                <NavigationMenuItem>
                  <Link href="/forms" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${overrideDefaultCss}`}
                    >
                      {/*<UserCog2 className="mr-2 h-6 w-6"/>*/}
                      Forms
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* *****Test***** */}
                <NavigationMenuItem className={'hidden lg:inline-block'}>
                  <Link href="/test" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${overrideDefaultCss}`}
                    >
                      {/*<FlaskConical className="mr-2 h-6 w-6"/>*/}
                      Test
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* end nav menu with links */}
          </div>
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className={'flex-1 md:max-w-[300px] md:ml-auto'}>
              <TextInputWithIcon
                id="site-search-input"
                name="site-search-input"
                type="search"
                placeholder="Search site..."
                startIcon={<Search className="h-4 w-4 text-muted-foreground" />}
              />
            </div>

            {/* Dropdown avatar */}
            <nav className={'flex items-center gap-1'}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <SunMoon className="mr-2 h-4 w-4" />
                      <span>Theme</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onClick={() => {
                            setTheme('dark')
                          }}
                        >
                          <Moon className="mr-2 h-4 w-4" />
                          <span>Dark</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setTheme('light')
                          }}
                        >
                          <Sun className="mr-2 h-4 w-4" />
                          <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setTheme('system')
                          }}
                        >
                          <SunMoon className="mr-2 h-4 w-4" />
                          <span>System</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      startTransition(async () => {
                        await signOut()
                      })
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/*end  Dropdown avatar */}
          </div>
        </div>
      </div>
    </header>
  )
}
