import Link from "next/link";
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    const path = router.pathname;
    return (
        <footer className="footer">
            <Link href={'/'} className={path==='/'? "footer-selected":"footer-not-selected"}>
                <HomeIcon width={28}/>
                <span>Home</span>
            </Link>
            <Link href={'/checkout'} className={path==='/checkout'? "footer-selected":"footer-not-selected"}>
                <ShoppingCartIcon width={28} />
                <span>Cart 0</span>
            </Link>
        </footer>
    )
}
