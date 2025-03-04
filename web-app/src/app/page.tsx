import { PearchParams } from "@/types";
import AnalyticsCards from "@/ui/components/AnalyticsCards";
import FetchButton from "@/ui/components/FetchButton";
import Pagination from "@/ui/components/Pagination";
import Search from "@/ui/components/Search";
import Table from "@/ui/components/Table";

export default function Home({ searchParams }: PearchParams) {
  return (
    <main className="container min-h-screen flex flex-col gap-4 p-4 pb-32 ">
      <Search />

      <div className="w-full overflow-x-auto py-4">
        <AnalyticsCards currency={searchParams?.currency || 'usd'} />
      </div>

      <Table searchParams={searchParams} />

      <Pagination />

      <FetchButton currency={searchParams?.currency || 'usd'} />
    </main>
  );
}
