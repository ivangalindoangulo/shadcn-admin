import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Post {
  id: number
  title: string
  content: string
}

export function SupabaseTable() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) {
        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error('Error fetching posts:', error)
      } else {
        setPosts(data || [])
      }
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading) return <div className="text-center">Cargando...</div>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Contenido</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}