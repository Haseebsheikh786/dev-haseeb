"use client";
import { useState, useEffect } from "react";

export default function AppLoader() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">

                <div className="flex flex-col items-center gap-6">

                    {/* Spinner */}
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
                    </div>

                    {/* Text */}
                    <p className="text-sm tracking-widest text-muted-foreground animate-pulse">
                        LOADING EXPERIENCE
                    </p>

                </div>

            </div>
        )
    }
}