import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="p-5">
                {children}
            </div>
            <Footer />
        </div>
    )
}
