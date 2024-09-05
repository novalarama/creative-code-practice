"use client";

import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      infinite: true,
      // syncTouch: true,
      // touchInertiaMultiplier: 12,
      // touchMultiplier: 0.5,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });
  return (
    <>
      <Box w="100vw" bg="#000" mt="24">
        <Image
          src="/assets/leaf1.webp"
          alt="Deskripsi Gambar"
          position="absolute"
          top={0}
          right={0}
          zIndex={10}
          width="32%"
          height="auto"
        />
        <Image
          src="/assets/leaf2.webp"
          alt="Deskripsi Gambar"
          position="absolute"
          top={0}
          left={-420}
          zIndex={10}
          width="60%"
          height="auto"
        />
        <Box zIndex={1} position="relative">
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
          >
            <Text lineHeight="24vw" fontSize="24vw">
              REDIS
            </Text>
            <Text lineHeight="24vw" fontSize="24vw">
              AGENCY
            </Text>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap="0"
            >
              <Icon viewBox="0 0 145 63" fill="none" w="24vw" h="24vw">
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M10.09 53.84V1h1.31v52.84h-1.3Zm1.96 0V1h1.31v52.84h-1.3Zm5.23 0V1h2.63v52.84h-2.63Zm4.58 0V1h1.32v52.84h-1.32Zm3.27-4.89V1h2.63v47.95h-2.63Zm5.57 0V1H32v47.95h-1.3Zm3.92 0V1h1.31v47.95h-1.31Zm4.25 0V1h2.62v47.95h-2.62Zm3.59 0V1h5.25v47.95h-5.25Zm6.88 0V1h1.31v47.95h-1.31Zm1.96 0V1h1.31v47.95H51.3Zm5.23 0V1h2.63v47.95h-2.63Zm3.92 0V1h2.63v47.95h-2.63Zm6.55 0V1h1.31v47.95H67Zm2.94 4.89V1h1.31v52.84h-1.3Zm2.95 0V1h1.3v52.84h-1.3Zm2.94-4.89V1h1.31v47.95h-1.31Zm1.97 0V1h1.3v47.95h-1.3Zm6.86 0V1h1.31v47.95h-1.31Zm4.91 0V1h1.3v47.95h-1.3Zm3.92 0V1h1.31v47.95h-1.3Zm3.92 0V1h1.32v47.95H97.4Zm5.56 0V1h3.94v47.95h-3.94Zm5.23 0V1h1.32v47.95h-1.31Zm3.6 0V1h3.94v47.95h-3.94Zm7.2 0V1h1.31v47.95h-1.3Zm1.96 4.89V1h1.32v52.84h-1.32Zm4.58 0V1h3.94v52.84h-3.94Zm5.24 0V1h1.3v52.84h-1.3Zm1.96 0V1h1.31v52.84h-1.31Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M5.43 55.67h1a2.28 2.28 0 0 0-.7-1.57 2.41 2.41 0 0 0-1.66-.55c-.6 0-1.09.12-1.48.37-.4.25-.7.58-.94 1-.24.41-.4.9-.5 1.43a9.49 9.49 0 0 0-.06 3.02c.07.47.21.9.42 1.3.2.38.5.7.87.95s.87.38 1.5.38a3 3 0 0 0 1.31-.26 2.5 2.5 0 0 0 1.33-1.57 3.45 3.45 0 0 0-.03-2.02 2.53 2.53 0 0 0-.51-.86 2.12 2.12 0 0 0-.8-.56 2.6 2.6 0 0 0-1.07-.21c-.46 0-.86.08-1.21.25a2.2 2.2 0 0 0-.88.84L2 57.58a6.5 6.5 0 0 1 .39-2.05c.15-.32.35-.58.61-.79.26-.2.6-.31 1.03-.31.4 0 .72.11.96.34.24.22.39.53.44.9ZM3.92 57.4a1.53 1.53 0 0 1 1.58 1.16 2.44 2.44 0 0 1-.01 1.43c-.07.22-.18.42-.32.59a1.53 1.53 0 0 1-1.25.55c-.27 0-.52-.05-.74-.14-.21-.1-.4-.23-.54-.4A1.78 1.78 0 0 1 2.3 60a2.44 2.44 0 0 1-.01-1.46 1.66 1.66 0 0 1 1.62-1.14Zm25.91.37v-.67a7.64 7.64 0 0 1 .21-1.46 2 2 0 0 1 .3-.61 1.46 1.46 0 0 1 1.21-.6c.28 0 .52.05.72.16.2.11.36.26.48.44.14.17.23.37.3.6.07.24.12.48.15.73a20.68 20.68 0 0 1 .04 2.47c-.02.38-.08.75-.2 1.1-.1.33-.26.61-.5.85-.23.23-.56.35-.99.35-.42 0-.75-.12-.99-.35-.23-.24-.4-.52-.52-.86-.1-.34-.16-.7-.18-1.09l-.03-1.06Zm-1.06.01.03.96a6.46 6.46 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.11.18.44 0 .81-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.24 1.24 4.98 4.98 0 0 0-.39 1.85l-.03.95Zm7.61-.01v-.67a7.64 7.64 0 0 1 .2-1.46 2 2 0 0 1 .3-.61c.14-.18.3-.33.5-.44.2-.1.43-.16.71-.16.29 0 .53.05.72.16a1.7 1.7 0 0 1 .78 1.05c.07.23.12.47.15.72a20.68 20.68 0 0 1 .04 2.47c-.02.38-.08.75-.19 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-1 .35-.42 0-.75-.12-.98-.35a2.1 2.1 0 0 1-.52-.86c-.1-.34-.17-.7-.2-1.09l-.01-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.46 6.46 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.31.12.68.18 1.11.18.44 0 .82-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.39-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.44 0-.81.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.46 6.46 0 0 0-.39 1.86c-.02.32-.02.64-.02.94Zm7.6-.01v-.67a7.64 7.64 0 0 1 .21-1.46 2 2 0 0 1 .3-.61c.13-.18.3-.33.49-.44.2-.1.43-.16.72-.16.28 0 .52.05.72.16a1.88 1.88 0 0 1 .78 1.04c.06.24.11.48.15.73a20.68 20.68 0 0 1 .04 2.47c-.03.38-.09.75-.2 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-1 .35-.42 0-.75-.12-.98-.35a2.1 2.1 0 0 1-.52-.86c-.1-.34-.16-.7-.19-1.09l-.02-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.46 6.46 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.31.12.69.18 1.12.18.44 0 .8-.06 1.12-.18A2.21 2.21 0 0 0 47 60.6a6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.39-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.46 6.46 0 0 0-.39 1.86l-.02.94Zm7.6-.01v-.67a7.6 7.6 0 0 1 .21-1.46c.07-.24.17-.44.3-.61a1.45 1.45 0 0 1 1.21-.6c.28 0 .52.05.72.16a1.88 1.88 0 0 1 .78 1.04c.07.24.12.48.15.73a20.96 20.96 0 0 1 .04 2.47c-.02.38-.09.75-.2 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-1 .35-.41 0-.74-.12-.98-.35-.23-.24-.4-.52-.52-.86-.1-.34-.16-.7-.19-1.09l-.02-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.46 6.46 0 0 0 .4 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.1.18.45 0 .82-.06 1.13-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.46 6.46 0 0 0-.39 1.86l-.02.94Zm7.6-.01v-.67a7.6 7.6 0 0 1 .21-1.46 2 2 0 0 1 .3-.61 1.45 1.45 0 0 1 1.21-.6c.28 0 .52.05.72.16.2.11.36.26.48.44.14.17.23.37.3.6.07.24.12.48.15.73a20.96 20.96 0 0 1 .04 2.47c-.02.38-.08.75-.2 1.1-.1.33-.26.61-.5.85-.23.23-.56.35-.99.35-.42 0-.75-.12-.99-.35-.23-.24-.4-.52-.52-.86a4.9 4.9 0 0 1-.18-1.09L56 57.77Zm-1.06.01.03.96a6.46 6.46 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.11.18.44 0 .81-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.24 1.24 4.98 4.98 0 0 0-.39 1.85l-.03.95Zm28.52-.01v-.67a7.64 7.64 0 0 1 .21-1.46c.07-.24.17-.44.3-.61a1.45 1.45 0 0 1 1.21-.6c.28 0 .52.05.72.16a1.88 1.88 0 0 1 .78 1.04c.07.24.12.48.15.73a20.68 20.68 0 0 1 .04 2.47c-.02.38-.08.75-.2 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-.99.35-.42 0-.75-.12-.99-.35-.23-.24-.4-.52-.52-.86-.1-.34-.16-.7-.19-1.09l-.02-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.46 6.46 0 0 0 .4 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.11.18.44 0 .81-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.46 6.46 0 0 0-.39 1.86l-.02.94Zm7.6-.01v-.67a7.64 7.64 0 0 1 .22-1.46 2 2 0 0 1 .29-.61 1.46 1.46 0 0 1 1.21-.6c.28 0 .52.05.72.16.2.11.36.26.48.44.14.17.23.37.3.6.07.24.12.48.15.73a20.68 20.68 0 0 1 .04 2.47c-.02.38-.08.75-.2 1.1-.1.33-.26.61-.5.85-.23.23-.56.35-.99.35-.42 0-.75-.12-.99-.35-.23-.24-.4-.52-.51-.86-.1-.34-.17-.7-.2-1.09L90 57.77Zm-1.06.01.03.96a6.46 6.46 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.11.18.44 0 .81-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.46 6.46 0 0 0 .39-1.86 19.96 19.96 0 0 0 0-1.9 6.46 6.46 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.24 1.24 4.98 4.98 0 0 0-.39 1.85l-.03.95Zm7.61-.01v-.67a7.64 7.64 0 0 1 .2-1.46 2 2 0 0 1 .3-.61c.14-.18.3-.33.5-.44.2-.1.43-.16.71-.16.29 0 .53.05.72.16a1.7 1.7 0 0 1 .78 1.05c.07.23.12.47.15.72a20.68 20.68 0 0 1 .04 2.47c-.02.38-.08.75-.19 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-1 .35-.42 0-.75-.12-.98-.35a2.1 2.1 0 0 1-.52-.86c-.1-.34-.17-.7-.2-1.09l-.01-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.47 6.47 0 0 0 .39 1.85 2.21 2.21 0 0 0 1.25 1.23c.31.12.68.18 1.11.18.44 0 .82-.06 1.12-.18a2.21 2.21 0 0 0 1.25-1.23 6.47 6.47 0 0 0 .39-1.86 19.59 19.59 0 0 0 0-1.9 6.47 6.47 0 0 0-.39-1.85 2.2 2.2 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.44 0-.81.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.47 6.47 0 0 0-.39 1.86c-.02.32-.02.64-.02.94Zm7.6-.01v-.67a7.8 7.8 0 0 1 .21-1.46 2 2 0 0 1 .3-.61c.13-.18.3-.33.49-.44.2-.1.44-.16.72-.16.28 0 .52.05.72.16a1.88 1.88 0 0 1 .78 1.04c.06.24.11.48.15.73.04.25.06.5.06.74a23.46 23.46 0 0 1-.03 1.73c-.02.38-.08.75-.19 1.1a2 2 0 0 1-.5.85c-.24.23-.57.35-1 .35-.42 0-.75-.12-.98-.35a2.1 2.1 0 0 1-.52-.86c-.1-.34-.16-.7-.19-1.09l-.02-1.06Zm-1.06.01c0 .31 0 .63.02.96a6.47 6.47 0 0 0 .4 1.85 2.21 2.21 0 0 0 1.25 1.23c.3.12.68.18 1.1.18.45 0 .82-.06 1.13-.18a2.21 2.21 0 0 0 1.24-1.23 6.47 6.47 0 0 0 .39-1.86 20.91 20.91 0 0 0 0-1.9 6.47 6.47 0 0 0-.39-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.47 6.47 0 0 0-.39 1.86l-.02.94Zm7.6-.01v-.67a7.48 7.48 0 0 1 .21-1.46 2 2 0 0 1 .3-.61 1.45 1.45 0 0 1 1.21-.6c.28 0 .52.05.72.16a1.88 1.88 0 0 1 .78 1.04c.07.24.12.48.15.73a20.43 20.43 0 0 1 .04 2.47c-.02.38-.09.75-.2 1.1-.1.33-.27.61-.5.85-.24.23-.57.35-.99.35-.42 0-.75-.12-.99-.35-.23-.24-.4-.52-.52-.86-.1-.34-.16-.7-.19-1.09l-.02-1.06Zm-1.06.01c0 .31 0 .63.03.96a6.47 6.47 0 0 0 .38 1.85 2.21 2.21 0 0 0 1.25 1.23c.31.12.69.18 1.12.18.44 0 .81-.06 1.12-.18a2.2 2.2 0 0 0 1.25-1.23 6.47 6.47 0 0 0 .39-1.86 19.59 19.59 0 0 0 0-1.9 6.47 6.47 0 0 0-.4-1.85 2.19 2.19 0 0 0-1.26-1.24c-.3-.13-.67-.2-1.1-.2-.43 0-.8.07-1.12.2a2.2 2.2 0 0 0-1.25 1.24 6.47 6.47 0 0 0-.39 1.86l-.02.94Zm31 2.08h-1c.06.72.33 1.26.8 1.61a2.8 2.8 0 0 0 1.73.53c1.02 0 1.75-.38 2.2-1.15.47-.78.7-1.88.7-3.32 0-.8-.08-1.44-.24-1.95a3.2 3.2 0 0 0-.6-1.22 2.3 2.3 0 0 0-.91-.63 3.23 3.23 0 0 0-2.22.02 2.54 2.54 0 0 0-1.43 1.42c-.14.32-.2.69-.2 1.09a2.8 2.8 0 0 0 .66 2.01c.23.24.51.43.84.57a3 3 0 0 0 1.13.2 2.19 2.19 0 0 0 1.93-1.15l.03.02a5.33 5.33 0 0 1-.5 2.43c-.31.53-.77.8-1.39.8-.4 0-.74-.12-1.03-.34a1.27 1.27 0 0 1-.5-.94Zm3.24-3.53a2.06 2.06 0 0 1-.46 1.29c-.15.16-.33.3-.54.4a1.72 1.72 0 0 1-1.38 0 1.84 1.84 0 0 1-.86-.96 1.86 1.86 0 0 1-.11-.66c0-.26.02-.5.08-.74s.16-.44.28-.62c.13-.2.3-.34.5-.45.22-.1.47-.16.77-.16.28 0 .53.05.74.15.21.1.4.24.53.42a2.2 2.2 0 0 1 .45 1.33Z"
                  clipRule="evenodd"
                />
              </Icon>
            </Flex>
          </Flex>
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Text
              color="white"
              fontSize="2.2vw"
              mt={6}
              w="42%"
              textAlign="center"
            >
              REDIS® AGENCY{" "}
              <Text as="span" fontSize="1.8vw">
                is about 15 years of design experience, concentrated in its
                people and divided into departments based on the value we bring
                to our clients. We add passion to brands and meaningfulness to
                bold products.
              </Text>
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
