'use client';
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';

import CategoryBox from "../CategoryBox";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
    },
]

const Categories = () => {
    return ( 
        <Container>
            <div
                className="
                    pt-4
                    flex 
                    flex-row 
                    items-center 
                    justify-between
                    overflow-x-auto
                "
            >
                {categories.map((item) =>{
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />
                })}
            </div>

        </Container>
    );
}

export default Categories;