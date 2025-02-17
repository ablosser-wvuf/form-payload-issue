'use client'

import { useRowLabel } from '@payloadcms/ui'
import { useEffect, useState } from 'react'

export const RelationshipLabel = (props: any) => {
  const { data, rowNumber } = useRowLabel<{ group: any }>()
  const [groupData, setGroupData] = useState({'name': ''})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/groups/${data.group}`, {
          credentials: 'include',
        })
        const responseData = await response.json()
        setGroupData(responseData)
      } catch (error) {
        console.error('Error fetching group data:', error)
      }
    }

    fetchData()
  }, [data.group])

  useEffect(() => {

    console.log("GROUP DATA", groupData);
  }, [groupData])

  return <div>{groupData?.name? groupData?.name : ''}</div>
}
