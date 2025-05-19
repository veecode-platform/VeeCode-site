import PageNotFound from "@/components/layout/PageNotFound";

export default function NotFound() {
  return <PageNotFound />;
}

export const metadata = {
  title: '404 - Página não encontrada',
  description: 'A página que você está procurando não foi encontrada',
};

export const dynamic = 'force-static';
