
import { Card } from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { lusitana } from "../../ui/fonts";
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';


import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardsSkeleton,
  } from '@/app/ui/skeletons';

export default async function Page() {



    return <main>
        <h1 className={
            `${lusitana.className} mb-4 text-xl md:text-2xl`
        }>
            Dashboard
        </h1>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
                <RevenueChart />
            </Suspense>
            <Suspense fallback={<RevenueChartSkeleton />}>
                <LatestInvoices />
            </Suspense>

        </div>
    </main>
}