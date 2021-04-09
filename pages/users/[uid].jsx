import { useRouter } from 'next/router'

export default function User() {
    // pull the path param from the router object
    const router = useRouter()
    const { uid } = router.query

    return (
        <div>
            <h1>Hello User { uid } </h1>
        </div>
    )
}