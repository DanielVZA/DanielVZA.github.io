'use client'
import {useEffect, useState, useRef, useCallback} from "react";
import HeroCard from "@/app/super-heroes/HeroCard";
import {getSuperHeroes} from "@/services/superHeroService";
import {SuperHero} from "@/types/SuperHero";

const SuperHeroList = () => {
    const [heroes, setHeroes] = useState<SuperHero[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const {heroes: newHeroes, hasMore: newHasMore} = await getSuperHeroes(page);
            setHeroes(prev => [...prev, ...newHeroes]);
            setPage(prev => prev + 1);
            setHasMore(newHasMore);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [page, hasMore, loading]);

    useEffect(() => {
        loadMore();
    }, []); // Load initial data

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            {threshold: 1.0}
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loadMore]);

    return (
        <>
            {
                heroes.map((hero) => (
                        <div className="col" key={hero.id}>
                            <HeroCard hero={hero}/>
                        </div>
                    )
                )
            }
            <div ref={observerRef} className="mt-4">
                {loading && <p>Cargando...</p>}
                {!hasMore && <p>No hay más héroes para cargar.</p>}
            </div>
        </>
    );
}

export default SuperHeroList;
