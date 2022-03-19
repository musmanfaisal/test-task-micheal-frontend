export const servicesData = [
    {
        name: "Some service",
        id: "1",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
    },
    {
        name: "Some service",
        id: "2",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
    },
    {
        name: "Some service",
        id: "3",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
    },
]

export const plans = [
    {
        name: "Free",
        id: "1",
        content: `
<p>10 users included</p>
<p>2 GB of storage</p>
<p>Email support</p>
<p>Help center access</p>`,
        price: 0,
        buttonText: "Sign up for free",
        outline: true
    },
    {
        name: "Pro",
        id: "2",
        content: `
<p>10 users included</p>
<p>2 GB of storage</p>
<p>Email support</p>
<p>Help center access</p>`,
        price: 15,
        buttonText: "Get started",
        outline: false
    },
    {
        name: "Enterprise",
        id: "3",
        content: `
<p>10 users included</p>
<p>2 GB of storage</p>
<p>Email support</p>
<p>Help center access</p>`,
        price: 29,
        buttonText: "Contact us",
        outline: false
    },
]

export const mockApis = (data, timeout = 500) => new Promise(res => {
    setTimeout(() => {
        res({ data })
    }, timeout);
})