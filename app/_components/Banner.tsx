'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import sharadImg from '../../public/projects/images/sharad.png';
import Image from 'next/image';
import { FileIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isResume, setIsResume] = React.useState(false);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 max-md:mt-20 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULL STACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            sharad sharma
                        </span>
                        . A Full Stack Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        rel="noopener noreferrer"
                        variant="primary"
                        onClick={() => navigator.clipboard.writeText("sharadsharma.dev@gmail.com")}
                        className="mt-9 banner-button slide-up-and-fade w-[300px] text-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered ? "Click to copy" : "sharadsharma.dev@gmail.com"}
                    </Button>
                    <Button
                        rel="noopener noreferrer"
                        variant="primary"
                        href="https://drive.google.com/file/d/19rufXzhlRZF_EbXLYpgg2h1msJ6SUm6u/view?usp=sharing"
                        target="_blank"
                        className="mt-9 banner-button slide-up-and-fade w-[300px] text-center"
                        onMouseEnter={() => setIsResume(true)}
                        onMouseLeave={() => setIsResume(false)}
                    >
                        <span className="flex items-center gap-2">
                            <FileIcon size={20} />
                            {isResume ? "Click to go resume" : "Download Resume"}
                        </span>
                    </Button>
                </div>
                <div className="md:absolute right-[10%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-[2rem] border  ">

                            <CardItem translateZ="100" className="w-full">
                                <Image
                                    src={sharadImg}
                                    alt="sharad sharma"
                                    className='rounded-[2rem] border-4 border-solid border-white shadow-xl/30'
                                    width={500}
                                    height={300}
                                    priority
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>

                    {/* <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
