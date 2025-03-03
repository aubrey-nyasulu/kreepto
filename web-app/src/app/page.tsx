import { PearchParams } from "@/types";
import TopCoins from "@/ui/cards/TopCoins";
import FetchButton from "@/ui/components/FetchButton";
import Pagination from "@/ui/components/Pagination";
import Search from "@/ui/components/Search";
import Table from "@/ui/components/Table";

export default function Home({ searchParams }: PearchParams) {
  return (
    <main className="container min-h-screen flex flex-col gap-4 p-4 ">
      <Search />

      <Table searchParams={searchParams} />

      <Pagination />

      <FetchButton currency={searchParams?.currency || 'usd'} />
    </main>
  );
}
