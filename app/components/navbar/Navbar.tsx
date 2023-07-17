import Container from '../Container';

export default function Navbar() {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div
                className='py-4 border-p-[1px]'
            >
                <Container>
                    <div
                        className='
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        '
                    >
                    Anything
                    </div>
                </Container>

            </div>
        </div>
    )
}
