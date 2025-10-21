import { SupabaseTable } from '@/components/supabase-table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/supabasetable')({
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Supabase Table</h1>
      <SupabaseTable />
    </div>
  ),
})