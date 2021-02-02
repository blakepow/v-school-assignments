import React from 'react'

import {UglyContextConsumer} from './UglyContext'
import UglyItem from './UglyItem'


export default function UglyList() {
    return (
        <UglyContextConsumer>
            {context =>(
                context.uglyThings.map((uglyItem, i) => {
                    return <UglyItem
                        key={i}
                        id={i}
                        title={uglyItem.title}
                        desc={uglyItem.desc}
                        imgUrl={uglyItem.imgUrl}
                    />
                })
        )}
        </UglyContextConsumer>
    )
}
