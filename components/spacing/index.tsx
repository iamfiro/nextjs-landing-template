export const Spacing = ({ height=10, width = 10 }: { height?: number, width?: number }) => {
    const devMode = process.env.SPACING_DEV_MODE === 'true';

    return (
        <div style={{ height, width, backgroundColor: devMode ? 'var(--color-red-lighter)' : '', margin: '0 auto' }}>{devMode}</div>
    )
}

export default Spacing;