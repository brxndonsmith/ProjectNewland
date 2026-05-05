
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Planet = () => {
    const planetRef = useRef<THREE.Mesh>(null);
    const railRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (planetRef.current) planetRef.current.rotation.y += 0.001;
        if (railRef.current) railRef.current.rotation.y += 0.003;
    });

    return (
        <group>
            {/* The Earth-like Sphere with structured mapping feel */}
            <Sphere ref={planetRef} args={[2.5, 64, 64]}>
                <meshStandardMaterial 
                    color="#050505" 
                    emissive="#0a0a0a"
                    roughness={1}
                    metalness={0.5}
                />
            </Sphere>

            {/* Structured Geo-Magnetic Rail Network */}
            <group ref={railRef}>
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 4]}>
                        <torusGeometry args={[2.7, 0.005, 16, 100]} />
                        <meshBasicMaterial color="#4FD1C5" transparent opacity={0.3} />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

export const PlanetScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#E8C17F" />
                <Planet />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

export const InfrastructureScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[10, 15, 25]} />
                <gridHelper args={[60, 40, "#4FD1C5", "#111"]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 20, 10]} intensity={1} color="#4FD1C5" />
                <group>
                    {/* Main Transit Conduits */}
                    {[...Array(15)].map((_, i) => (
                        <group key={i} position={[i * 4 - 28, 0, 0]}>
                            <mesh>
                                <boxGeometry args={[0.1, 0.1, 60]} />
                                <meshStandardMaterial color="#222" emissive="#111" />
                            </mesh>
                            {/* Moving Transport Pods */}
                            <Float speed={8} rotationIntensity={0} floatIntensity={0.2}>
                                <mesh position={[0, 0.3, (i * 5) % 40 - 20]}>
                                    <boxGeometry args={[1, 0.4, 2.5]} />
                                    <meshStandardMaterial color="#050505" emissive="#4FD1C5" emissiveIntensity={3} metalness={1} roughness={0} />
                                    {/* Light Trail effect */}
                                    <mesh position={[0, 0, -1.5]}>
                                        <boxGeometry args={[0.5, 0.1, 4]} />
                                        <meshBasicMaterial color="#4FD1C5" transparent opacity={0.3} />
                                    </mesh>
                                </mesh>
                            </Float>
                            {/* Static Infrastructure Hubs/Terminals */}
                            {i % 4 === 0 && (
                                <mesh position={[0, 2, 0]}>
                                    <cylinderGeometry args={[2, 2.2, 0.5, 8]} />
                                    <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
                                </mesh>
                            )}
                        </group>
                    ))}
                    {/* Cross-beams / Structural wiring */}
                    {[...Array(10)].map((_, i) => (
                        <mesh key={`beam-${i}`} position={[0, -0.1, i * 6 - 30]}>
                            <boxGeometry args={[60, 0.05, 0.05]} />
                            <meshBasicMaterial color="#333" />
                        </mesh>
                    ))}
                </group>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
            </Canvas>
        </div>
    );
};

export const ExpansionScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[10, 15, 30]} />
                <Stars radius={100} count={5000} factor={6} fade speed={2} />
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#fff" />
                <group>
                    {/* Space Elevator Tether - Multi-strand */}
                    {[...Array(3)].map((_, i) => (
                        <mesh key={i} position={[Math.sin(i) * 0.2, 0, Math.cos(i) * 0.2]}>
                            <cylinderGeometry args={[0.02, 0.02, 100, 8]} />
                            <meshStandardMaterial color="#444" metalness={1} />
                        </mesh>
                    ))}
                    
                    {/* Orbital Station Hub - Complex Structure */}
                    <Float speed={1} rotationIntensity={0.5}>
                        <group position={[0, 15, 0]}>
                            {/* Main Hub */}
                            <mesh>
                                <octahedronGeometry args={[5, 1]} />
                                <meshStandardMaterial color="#111" metalness={1} roughness={0.2} />
                            </mesh>
                            {/* Spinning Ring */}
                            <group>
                                <mesh rotation={[Math.PI / 2, 0, 0]}>
                                    <torusGeometry args={[8, 0.3, 16, 100]} />
                                    <meshStandardMaterial color="#222" />
                                </mesh>
                                {/* Docking arms */}
                                {[...Array(4)].map((_, i) => (
                                    <mesh key={i} rotation={[0, (i * Math.PI) / 2, 0]} position={[6, 0, 0]}>
                                        <boxGeometry args={[4, 0.5, 0.5]} />
                                        <meshStandardMaterial color="#333" />
                                    </mesh>
                                ))}
                            </group>
                            {/* Energy Core */}
                            <mesh>
                                <sphereGeometry args={[1, 32, 32]} />
                                <meshStandardMaterial color="#4FD1C5" emissive="#4FD1C5" emissiveIntensity={5} />
                            </mesh>
                        </group>
                    </Float>

                    {/* Smaller Satellite Drones */}
                    {[...Array(8)].map((_, i) => (
                        <Float key={i} speed={3} position={[Math.sin(i) * 12, 10 + Math.cos(i) * 5, Math.cos(i) * 12]}>
                            <mesh>
                                <boxGeometry args={[0.5, 0.2, 0.5]} />
                                <meshStandardMaterial color="#4FD1C5" emissive="#4FD1C5" />
                            </mesh>
                        </Float>
                    ))}
                </group>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export const TechnologyScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#4FD1C5" />
                <group>
                    {/* Central Processing Core - Crystalline Structure */}
                    <Float speed={2} rotationIntensity={1}>
                        <mesh>
                            <icosahedronGeometry args={[3, 1]} />
                            <meshStandardMaterial color="#050505" wireframe emissive="#4FD1C5" emissiveIntensity={1} />
                        </mesh>
                        <mesh scale={0.5}>
                            <icosahedronGeometry args={[3, 0]} />
                            <meshStandardMaterial color="#4FD1C5" metalness={1} roughness={0} emissive="#4FD1C5" emissiveIntensity={2} />
                        </mesh>
                    </Float>

                    {/* Data flow layers - Dynamic lattices */}
                    {[...Array(4)].map((_, i) => (
                        <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                            <mesh>
                                <torusGeometry args={[5 + i, 0.02, 16, 100]} />
                                <meshBasicMaterial color="#4FD1C5" transparent opacity={0.1} />
                            </mesh>
                            {/* Moving Data Bits */}
                            <Float speed={10} floatIntensity={5} rotationIntensity={0}>
                                <mesh position={[5 + i, 0, 0]}>
                                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                                    <meshBasicMaterial color="#4FD1C5" />
                                </mesh>
                            </Float>
                        </group>
                    ))}

                    {/* Background Bokeh/Particles */}
                    <Stars count={1000} factor={2} saturation={0} fade />
                </group>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export const HealthScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <group>
                    {/* Biological Helix / Data Stream */}
                    {[...Array(20)].map((_, i) => (
                        <Float key={i} speed={2} position={[0, i * 0.5 - 5, 0]}>
                            <mesh position={[Math.sin(i * 0.5) * 2, 0, Math.cos(i * 0.5) * 2]}>
                                <sphereGeometry args={[0.1, 16, 16]} />
                                <meshStandardMaterial color="#63B3ED" emissive="#63B3ED" emissiveIntensity={2} />
                            </mesh>
                            <mesh position={[-Math.sin(i * 0.5) * 2, 0, -Math.cos(i * 0.5) * 2]}>
                                <sphereGeometry args={[0.1, 16, 16]} />
                                <meshStandardMaterial color="#63B3ED" />
                            </mesh>
                        </Float>
                    ))}
                    {/* Scanning Ring */}
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[3, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#63B3ED" transparent opacity={0.3} />
                    </mesh>
                </group>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </div>
    );
};

export const CivilianScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[10, 15, 20]} />
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
                <group>
                    {/* Modern Modular Blocks */}
                    {[-2, 0, 2].map((x) => 
                        [-2, 0, 2].map((z) => (
                            <mesh key={`${x}-${z}`} position={[x * 4, (Math.random() * 5), z * 4]} castShadow receiveShadow>
                                <boxGeometry args={[3, 8, 3]} />
                                <meshStandardMaterial color="#222" roughness={0.1} metalness={0.8} />
                                {/* Internal light windows */}
                                <mesh position={[0, 0, 1.51]}>
                                    <planeGeometry args={[2.5, 7.5]} />
                                    <meshBasicMaterial color="#4FD1C5" transparent opacity={0.1} />
                                </mesh>
                            </mesh>
                        ))
                    )
                }
                </group>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export const LKIScene: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} color="#E8C17F" intensity={5} />
                <group>
                    {/* The Symbolic Core */}
                    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                            <octahedronGeometry args={[2, 0]} />
                            <meshStandardMaterial 
                                color="#E8C17F" 
                                metalness={1} 
                                roughness={0} 
                                emissive="#E8C17F" 
                                emissiveIntensity={0.5} 
                                wireframe
                            />
                        </mesh>
                        <mesh>
                            <octahedronGeometry args={[1, 0]} />
                            <meshStandardMaterial color="#E8C17F" metalness={1} roughness={0} />
                        </mesh>
                    </Float>

                    {/* Rotating Energy Rings */}
                    {[...Array(5)].map((_, i) => (
                        <group key={i} rotation={[Math.PI / 2, i * (Math.PI / 2.5), 0]}>
                            <mesh>
                                <torusGeometry args={[3 + i * 0.5, 0.01, 16, 120]} />
                                <meshBasicMaterial color="#E8C17F" transparent opacity={0.2} />
                            </mesh>
                            {/* Orbital Data Points */}
                            <mesh position={[3 + i * 0.5, 0, 0]}>
                                <sphereGeometry args={[0.05, 8, 8]} />
                                <meshBasicMaterial color="#fff" />
                            </mesh>
                        </group>
                    ))}

                    {/* Sacred Lattice / Grid */}
                    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
                        <gridHelper args={[20, 20, "#E8C17F", "#111"]} />
                    </mesh>
                </group>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
            </Canvas>
        </div>
    );
};
