import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'


const Categories = () => {
    const [categories, setCategrories] = useState();

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'category'] 
        `).then(data => {
            setCategrories(data);
        })
    }, [])

    console.log('categories: ', categories)
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            {categories?.map((category) => {
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}

                />
            })}

            {categories && (
                <CategoryCard
                    key={categories[0]._id}
                    imgUrl={categories[0].image}
                    title={categories[0].name}
                />
            )}
            {categories && (
                <CategoryCard
                    key={categories[1]._id}
                    imgUrl={categories[1].image}
                    title={categories[1].name}
                />
            )}
            {categories && (
                <CategoryCard
                    key={categories[2]._id}
                    imgUrl={categories[2].image}
                    title={categories[2].name}
                />
            )}
        </ScrollView>
    )
}

export default Categories