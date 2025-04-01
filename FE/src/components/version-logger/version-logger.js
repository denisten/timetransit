import { useEffect } from "react";

export function VersionLogger() {
    useEffect(() => {
        fetch("/build-version.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(
                    `%c🛠️ Build version: ${data.version} — ${data.timestamp}`,
                    "color: green; font-weight: bold;"
                );
            })
            .catch(() => {
                console.warn("⚠️ Build version info not available");
            });
    }, []);

    return null;
}