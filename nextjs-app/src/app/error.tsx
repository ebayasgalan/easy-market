'use client' 
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}