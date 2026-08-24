import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Footer from '@/components/footer'

export default function Home() {
  return <main className="min-h-screen bg-background"><Hero /><Projects /><Skills /><Education /><Footer /></main>
}
