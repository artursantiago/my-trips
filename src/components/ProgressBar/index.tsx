import NextProgressBar from 'nextjs-progressbar'

const ProgressBar = () => {
  return (
    <NextProgressBar
      color="#A70101"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
  )
}

export default ProgressBar
