import { FC, ReactChild, Suspense } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'

const SuspenseWithError: FC<{ error: string; loading: ReactChild }> = ({
  error,
  loading,
  children,
}) => {
  return (
    <ErrorBoundary fallbackText={error}>
      <Suspense fallback={loading}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseWithError
