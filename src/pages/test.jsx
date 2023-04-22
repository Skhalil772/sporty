import Link from "next/link";
import React from "react";

function Auth() {
	return (
		<div>
			<h1 className="font-bold mb-6">Home Page</h1>
			<div className="mb-6 flex gap-3">
				<Link href="/api/auth/signin">Test</Link>
			</div>
		</div>
	);
}

export default Auth;
