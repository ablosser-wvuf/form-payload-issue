'use client'

import { Toolbar, DeviceType } from '@tableau/embedding-api'

// import {TableauViz, TableauEventType, Toolbar, DeviceType} from '@tableau/embedding-api';

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

import Script from 'next/script'
import { useMediaQuery } from 'usehooks-ts'

export type TableauEmbedReportProps = {
  id: string
  src: string
  toolbar?: Toolbar
  hideTabs?: boolean
  width?: string
  height?: string
  device?: 'default' | 'desktop' | 'tablet' | 'phone'
  token?: string
}

// 2023.3.4 (20233.24.0314.1442) 64-bit Windows

//2023.3.x	tableau.embedding.3.8.0.min.js	Tableau Cloud (December 2023)

// const viz = new TableauViz();
// viz.src = 'https://my-server/views/my-workbook/my-view';
// viz.toolbar = 'hidden';
// document.getElementById('tableauViz').appendChild(viz);

//git repo for maybe some ideas https://github.com/alexeski/tableau-embed-viz-responsive-apiv3/blob/main/app.js
//article from git repo https://alexeskinasy.medium.com/responsive-design-best-practices-for-embedding-tableau-304f12509a5d

// https://public.tableau.com/views/DashboardLayout_7/PCDash?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link

export default function TableauEmbedReport({
  id,
  src,
  toolbar,
  hideTabs,
  device: deviceLayout,
}: TableauEmbedReportProps) {
  const [device, setDevice] = useState(deviceLayout)

  //todo: figure out how best to use this
  const matches = useMediaQuery('(min-width: 768px)')

  // const device = device || 'desktop';

  // const viz = new TableauViz();

  //attach a ref. not sure if this is needed
  // const ref = useRef<JSX.IntrinsicElements['tableau-viz']>(null)

  // const ref = useRef<HTMLDivElement>(null);

  // ref.current.appendChild();

  // console.log('device from state in main function: ', device);

  // viz.src = 'https://public.tableau.com/views/Superstore_embedded_800x800/Overview';
  // viz.toolbar = Toolbar.Hidden;

  useEffect(() => {
    if (matches) {
      setDevice((prevState) => {
        if (prevState === 'desktop') {
          return
        } else {
          return 'desktop'
        }
      })
    } else {
      setDevice('phone')
    }

    // const viz = new TableauViz();
    // viz.src = src;

    // ref.current!.appendChild(viz);

    // console.log('how many times is this running wtf');

    // ref.current!.src = src;

    // setTimeout(() => {
    //     // viz.device = DeviceType.Phone;
    //     setDevice("phone");
    //
    //     // ref.current!.device = 'phone';
    //
    // }, 10000);
  }, [matches])

  //
  // id = {'tableauViz'}
  // src = {
  //     'https://public.tableau.com/views/Embed-and-Mobile-OptimizedSupestoreSalesDashboard/SalesSummary'

  return (
    <>
      {/*<tableau-viz id="tableauViz" src='https://public.tableau.com/views/Superstore_embedded_800x800/Overview' toolbar="bottom" hide-tabs/>*/}
      {/*} <tableau-viz id={id} ref={ref} src={src} device={device} />
      {/*<div id={'tableauViz'} ref={ref}></div>*/}
      {/*<div ref={ref}></div>*/}
      {/*<tableau-viz ref={ref} id="tableauViz" device={device} />*/}
    </>
  )
}
