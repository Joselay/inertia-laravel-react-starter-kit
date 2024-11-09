import React from "react";

export default function Home({ name, age }: { name: string; age: number }) {
    return (
        <div>
            Hello my name is {name} and I am {age} years old
        </div>
    );
}
