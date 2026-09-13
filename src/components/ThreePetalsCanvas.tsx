import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Wind } from "lucide-react";

interface PetalsCanvasProps {
  interactive?: boolean;
}

export const ThreePetalsCanvas: React.FC<PetalsCanvasProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [breezeActive, setBreezeActive] = useState(true);
  const [particleCount] = useState(48);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights for 3D depth and subtle shading
    const ambientLight = new THREE.AmbientLight(0xfff5f0, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd5cc, 1.2);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc26760, 0.6);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // Create organic petal shape geometry
    const shape = new THREE.Shape();
    // Petal curve outline
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.4, 0.4, 0.7, 1.0, 0.4, 1.6);
    shape.bezierCurveTo(0.2, 2.0, -0.2, 2.0, -0.4, 1.6);
    shape.bezierCurveTo(-0.7, 1.0, -0.4, 0.4, 0, 0);

    const petalGeometry = new THREE.ShapeGeometry(shape, 8);
    // Add subtle 3D curvature to vertices
    const posAttribute = petalGeometry.attributes.position;
    for (let i = 0; i < posAttribute.count; i++) {
      const y = posAttribute.getY(i);
      const x = posAttribute.getX(i);
      const zCurve = -Math.sin((y / 2.0) * Math.PI) * 0.25 + (x * x) * 0.15;
      posAttribute.setZ(i, zCurve);
    }
    petalGeometry.computeVertexNormals();

    // Color palette matching the beauty salon theme (terracotta, soft rose, cream, blush)
    const petalColors = [
      new THREE.Color("#C26760"), // terracotta
      new THREE.Color("#E7BDB5"), // soft dusty rose
      new THREE.Color("#F3DFD8"), // blush pearl
      new THREE.Color("#DFC1B5"), // warm nude
      new THREE.Color("#EBD5CB"), // champagne
    ];

    interface PetalData {
      mesh: THREE.Mesh;
      speedY: number;
      speedX: number;
      speedZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      wobbleOffset: number;
      wobbleSpeed: number;
      baseX: number;
      initialScale: number;
    }

    const petals: PetalData[] = [];

    // Instantiate individual petals
    for (let i = 0; i < particleCount; i++) {
      const color = petalColors[i % petalColors.length];
      const material = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.72 + Math.random() * 0.22,
      });

      const mesh = new THREE.Mesh(petalGeometry, material);

      // Random 3D positioning
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 16;
      mesh.position.set(x, y, z);

      const scale = 0.35 + Math.random() * 0.45;
      mesh.scale.set(scale, scale, scale);

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      scene.add(mesh);

      petals.push({
        mesh,
        speedY: 0.008 + Math.random() * 0.015,
        speedX: (Math.random() - 0.5) * 0.006,
        speedZ: (Math.random() - 0.5) * 0.004,
        rotSpeedX: 0.008 + Math.random() * 0.015,
        rotSpeedY: 0.006 + Math.random() * 0.012,
        rotSpeedZ: 0.005 + Math.random() * 0.01,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.8 + Math.random() * 1.2,
        baseX: x,
        initialScale: scale,
      });
    }

    // Mouse breeze interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = normX;
      mouse.targetY = normY;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Slight camera parallax
      camera.position.x = mouse.x * 1.5;
      camera.position.y = mouse.y * 1.2;
      camera.lookAt(0, 0, 0);

      // Animate petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        const m = p.mesh;

        // Gentle falling and fluttering
        m.position.y -= p.speedY;

        // Oscillate with sine wave for natural falling flutter
        const wobble = Math.sin(elapsedTime * p.wobbleSpeed + p.wobbleOffset);
        m.position.x = p.baseX + wobble * 0.75 + mouse.x * 2.2;
        m.position.z += p.speedZ;

        // Rotations
        m.rotation.x += p.rotSpeedX;
        m.rotation.y += p.rotSpeedY;
        m.rotation.z += p.rotSpeedZ + wobble * 0.01;

        // Reset if drifted below bottom
        if (m.position.y < -15) {
          m.position.y = 15;
          m.position.x = (Math.random() - 0.5) * 32;
          p.baseX = m.position.x;
          m.position.z = (Math.random() - 0.5) * 16;
        }

        // Reset if drifted too far sideways
        if (m.position.x > 20) {
          m.position.x = -20;
          p.baseX = -20;
        } else if (m.position.x < -20) {
          m.position.x = 20;
          p.baseX = 20;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);

      // Cleanup
      petalGeometry.dispose();
      petals.forEach((p) => {
        if (Array.isArray(p.mesh.material)) {
          p.mesh.material.forEach((mat) => mat.dispose());
        } else {
          p.mesh.material.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive, particleCount]);

  return (
    <div
      id="petals-canvas-container"
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
};
