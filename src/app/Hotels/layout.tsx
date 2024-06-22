import Footer from "@/components/Footer/Footer";

export default function HotelsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
				{children}
                <Footer />
			</>
	);
}
