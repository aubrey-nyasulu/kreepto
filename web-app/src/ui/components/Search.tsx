'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams!);
        params.set('page', '1');

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const handleSelect = (term: string) => {
        const params = new URLSearchParams(searchParams!);
        params.set('page', '1');

        if (term) {
            params.set('currency', term);
        } else {
            params.delete('currency');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="w-full bg-white/10 backdrop-blur-xl min-w-64 sticky top-2 z-50 flex gap-4 items-center border border-gray-300 rounded-md p-2">
            <input
                type='search'
                className={"peer block w-full border border-gray-300 rounded-full py-4 px-4 text-sm outline-2  placeholder:text-gray-500"}
                placeholder={'Search...'}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams?.get('query')?.toString()}
            />

            <div className='border p-2 rounded-md '>
                <select
                    name="currency"
                    id="currencySelector"
                    defaultValue="usd"
                    onChange={(e) => {
                        handleSelect(e.target.value)
                    }}
                    className=''
                >
                    <option value="usd">usd</option>
                    <option value="eur">euro</option>
                    <option value="inr">inr</option>
                </select>
            </div>
        </div>
    );
}
