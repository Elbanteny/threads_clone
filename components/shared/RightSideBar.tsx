import React from 'react'

const RightSideBar = () => {
    return (
        <section className='custom-scrollbar rightsidebar'>
            <div className='flex flex-col flex-1 justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Komunitas yang disarankan
                </h3>
            </div>

            <div className='flex flex-col flex-1 justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Akun yang disarankan
                </h3>
            </div>
        </section>
    )
}

export default RightSideBar