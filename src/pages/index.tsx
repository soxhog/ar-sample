import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     const script2 = document.createElement("script");
  //     script2.src =
  //       "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
  //     script2.async = true;
  //     document.body.appendChild(script2);
  //   }, []);

  return (
    <div className=" m-0 overflow-hidden">
      {/* <Head>
        <title>AR Page</title>
        <meta name="description" content="AR Page" />
      </Head> */}
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        vr-mode-ui="enabled: false;"
      >
        <a-assets>
          <a-asset-item id="kitsune" src="263.gltf"></a-asset-item>
        </a-assets>
        <a-marker preset="custom" type="pattern" url="pattern-marker.patt">
          <a-entity
            id="model"
            gltf-model="#kitsune"
            position="0 0 0"
            scale="1 1 1"
            rotation="270 0 0"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
