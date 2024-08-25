import {ClusterProvider} from '@/components/cluster/cluster-data-access'
import {SolanaProvider} from '@/components/solana/solana-provider'
import {UiLayout} from '@/components/ui/ui-layout'
import {ReactNode} from "react";
import {ReactQueryProvider} from './react-query-provider'


const links: { label: string; path: string }[] = [
    {label: 'Account', path: '/account'},
    {label: 'Clusters', path: '/clusters'},
    {label: 'Counter Program', path: '/counter'},
]

export function AppLayout({children}: { children: ReactNode }) {
    return (
        <ReactQueryProvider>
            <ClusterProvider>
                <SolanaProvider>
                    <UiLayout links={links}>{children}</UiLayout>
                </SolanaProvider>
            </ClusterProvider>
        </ReactQueryProvider>
    )
}
