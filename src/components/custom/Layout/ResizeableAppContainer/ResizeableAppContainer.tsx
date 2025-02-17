// 'use client'
//
// import { Home, Monitor, Smartphone, Tablet } from 'lucide-react'
// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
//
// import { ImperativePanelHandle } from 'react-resizable-panels'
//
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
// import { cn } from '@utilities/ui'
// import { ReactNode, RefObject, useEffect, useRef } from 'react'
// import { Tabs, TabsContent } from '@/components/ui/tabs'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Route } from 'next'
//
// type ResizableToolbarProps = {
//   resizablePanelRef: RefObject<ImperativePanelHandle | null>
// }
//
// function ResizableToolbar({ resizablePanelRef }: ResizableToolbarProps) {
//   // function ResizableToolbar() {
//
//   return (
//     <div className="flex flex-col items-center gap-4 sm:flex-row">
//       <div className="flex items-center gap-2">
//         <div className="flex items-center gap-4 pr-[14px] sm:ml-auto">
//           <Button asChild>
//             <Link href={'/dashboard' as Route}>Dashboard</Link>
//           </Button>
//           <div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex">
//             <ToggleGroup
//               type="single"
//               defaultValue="100"
//               onValueChange={(value: any) => {
//                 if (resizablePanelRef.current) {
//                   resizablePanelRef.current.resize(parseInt(value))
//                 }
//               }}
//             >
//               <ToggleGroupItem value="100" className="h-[22px] w-[22px] rounded-sm p-0">
//                 <Monitor className="h-3.5 w-3.5" />
//               </ToggleGroupItem>
//               <ToggleGroupItem value="60" className="h-[22px] w-[22px] rounded-sm p-0">
//                 <Tablet className="h-3.5 w-3.5" />
//               </ToggleGroupItem>
//               <ToggleGroupItem value="20" className="h-[22px] w-[22px] rounded-sm p-0">
//                 <Smartphone className="h-3.5 w-3.5" />
//               </ToggleGroupItem>
//             </ToggleGroup>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// // type ResizeableAppContainerProps = {
// //     children: ReactNode;
// // }
//
// export default function ResizeableAppContainer() {
//   const ref = useRef<ImperativePanelHandle>(null)
//
//   // style={{"--container-height": block.container?.height,} as React.CSSProperties} -- was on tabs component
//
//   return (
//     <>
//       <Tabs id={'test'} defaultValue="preview" className="relative grid w-full scroll-m-20 gap-4">
//         <ResizableToolbar resizablePanelRef={ref} />
//         <TabsContent
//           value="preview"
//           className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
//         >
//           <ResizablePanelGroup direction="horizontal" className="relative z-10">
//             <ResizablePanel
//               ref={ref}
//               className={cn('relative bg-background border-border')}
//               defaultSize={100}
//               minSize={20}
//             >
//               <iframe
//                 src={'/Dashboard'}
//                 className={'chunk-mode relative z-20 w-full bg-background h-screen'}
//               />
//             </ResizablePanel>
//             <ResizableHandle
//               className={cn(
//                 'relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 ' +
//                   'after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block',
//               )}
//             />
//             <ResizablePanel defaultSize={0} minSize={0} />
//           </ResizablePanelGroup>
//         </TabsContent>
//       </Tabs>
//     </>
//   )
// }
