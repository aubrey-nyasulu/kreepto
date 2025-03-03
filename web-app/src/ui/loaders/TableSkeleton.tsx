import { currencyHandler } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function TableSkeleton() {
    return (
        <div className="relative w-full mx-auto rounded-b-lg flex-1  border rounded-xl overflow-x-auto ">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-600 text-sm font-medium">
                        {
                            ['name', 'price', 'change', 'marketCap'].map((title, index) => (
                                <th
                                    key={title}
                                    className=" px-8 py-3 border-b cursor-context-menu"
                                >
                                    {title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody className="text-gray-800">
                    {
                        Array.from({ length: 10 }, (_, i) => i)
                            .map((i) => (
                                <tr
                                    key={i}
                                    className="hover:bg-gray-50 cursor-pointer group"
                                >
                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-8 h-8 animate-pulse bg-gray-100 rounded-full" />

                                            <div className='w-16 h-6 animate-pulse bg-gray-100'></div>
                                        </div>
                                    </td>

                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        <div className='w-24 h-6 animate-pulse bg-gray-100'></div>
                                    </td>

                                    <td className={`px-8 py-3 border border-x-0 cursor-context-menu  'text-green-500' : 'text-red-500'}`}>
                                        <div className='w-16 h-6 animate-pulse bg-gray-100'></div>
                                    </td>

                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        <div className='w-24 h-6 animate-pulse bg-gray-100'></div>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}
