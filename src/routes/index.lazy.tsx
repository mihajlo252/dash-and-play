import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BoxSection } from "../components/BoxSection";

export const Route = createLazyFileRoute("/")({
    component: Home,
});

const gap = "gap-5";
const profile = 'bag.png'

function Home() {
    return (
        <motion.main className={`grid h-full w-full grid-rows-[.2fr_1fr] ${gap}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <header className="flex h-full w-full items-center justify-between rounded-lg border-2 border-slate-900 bg-base-300 px-5 text-neutral">
                <div className="flex gap-2">
                    <img src={`./assets/${profile}`} className="h-[50px] w-[50px]" alt="" />
                    <div>
                        <p>Character</p>
                        <p>Class</p>
                    </div>
                </div>
                <p className="btn btn-secondary">Stats</p>
            </header>
            <section className={`flex ${gap}`}>
                <BoxSection width="w-[40%]">a</BoxSection>
                <div className={`flex h-full w-[50%] flex-col ${gap}`}>
                  <BoxSection width="w-full">a</BoxSection>
                  <BoxSection width="w-full">a</BoxSection>
                </div>
                <BoxSection width="w-[10%]">a</BoxSection>
            </section>
        </motion.main>
    );
}
