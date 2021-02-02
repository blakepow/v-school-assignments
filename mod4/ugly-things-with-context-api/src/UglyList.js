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
                        id={uglyItem._id}
                        title={uglyItem.title}
                        description={uglyItem.description}
                        imgUrl={uglyItem.imgUrl}
                        edit={context.edit}
                        delete={context.delete}
                    />
                })
        )}
        </UglyContextConsumer>
    )
}
