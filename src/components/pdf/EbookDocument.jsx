import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { MUSCLES, PLANES, MOVEMENTS } from '../../data';

// Usamos a fonte padrão 'Helvetica' embutida no @react-pdf/renderer para evitar erros 404 e timeouts de CORS
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff'
    },
    coverPage: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative'
    },
    coverAccent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '20%',
        backgroundColor: '#e11d48'
    },
    coverTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#ffffff'
    },
    coverSubtitle: {
        fontSize: 20,
        color: '#cbd5e1',
        textAlign: 'center',
        marginBottom: 40
    },
    coverAuthor: {
        fontSize: 14,
        position: 'absolute',
        bottom: 40,
        color: '#94a3b8'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#e11d48',
        paddingBottom: 10,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: 10,
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
        paddingTop: 10
    },
    muscleCard: {
        marginBottom: 25,
        paddingBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        flexDirection: 'row',
        gap: 15,
        breakInside: 'avoid'
    },
    muscleInfoContainer: {
        flex: 1
    },
    muscleImage: {
        width: 140,
        height: 140,
        objectFit: 'contain',
        borderRadius: 8,
        backgroundColor: '#f8fafc',
        padding: 5,
        borderWidth: 1,
        borderColor: '#e2e8f0'
    },
    muscleName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e11d48',
        marginBottom: 8,
    },
    badge: {
        backgroundColor: '#f1f5f9',
        padding: '4 8',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 8
    },
    badgeText: {
        fontSize: 10,
        color: '#475569',
        fontWeight: 'bold'
    },
    textRow: {
        marginBottom: 6,
        flexDirection: 'row'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#334155',
        width: 75
    },
    value: {
        fontSize: 11,
        color: '#475569',
        flex: 1,
        lineHeight: 1.4
    },
    exercisesTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1e293b',
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: '#f8fafc',
        padding: 5,
        borderRadius: 4
    },
    exerciseItem: {
        fontSize: 10,
        color: '#64748b',
        marginBottom: 3,
        paddingLeft: 5
    },
    link: {
        color: '#0284c7',
        textDecoration: 'none'
    },
    // Planos e Movimentos
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginBottom: 20
    },
    gridItem: {
        width: '47%',
        backgroundColor: '#f8fafc',
        padding: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 10
    },
    gridTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#e11d48',
        marginBottom: 8,
    },
    movItem: {
        width: '47%',
        marginBottom: 10,
        breakInside: 'avoid'
    },
    movName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1e293b'
    },
    movPlane: {
        fontSize: 9,
        color: '#e11d48',
        marginBottom: 2
    },
    movDesc: {
        fontSize: 10,
        color: '#64748b',
        lineHeight: 1.4
    }
});

const Footer = () => (
    <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
        `CinesioFit App • Guia de Cinesiologia • Página ${pageNumber} de ${totalPages}`
    )} fixed />
);

// Função auxiliar para evitar bloqueio de CORS e erros com PNG transparente interno do @react-pdf
// Passamos as imagens por um proxy CDN de imagens (wsrv.nl) que converte tudo para JPG seguro.
const getSafeImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('data:') || url.startsWith('/')) {
        return url; // Do not proxy local assets or base64
    }
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=jpg&bg=white&w=300`;
};

export const EbookDocument = () => (
    <Document
        title="Guia CinesioFit Premium"
        author="CinesioFit App"
        subject="Musculação e Cinesiologia"
    >
        {/* CAPA */}
        <Page size="A4" style={styles.coverPage}>
            <View style={styles.coverAccent} />
            <Text style={styles.coverTitle}>CinesioFit App</Text>
            <Text style={styles.coverSubtitle}>Guia Completo de Musculação{'\n'}e Cinesiologia Aplicada</Text>
            <Text style={styles.coverAuthor}>Material de Estudo Dinâmico</Text>
        </Page>

        {/* ÍNDICE DE MÚSCULOS */}
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Anatomia Muscular</Text>
            </View>

            {MUSCLES.map((muscle) => (
                <View key={muscle.id} style={styles.muscleCard} wrap={false}>
                    {muscle.image && (
                        <Image src={getSafeImageUrl(muscle.image)} style={styles.muscleImage} />
                    )}
                    <View style={styles.muscleInfoContainer}>
                        <Text style={styles.muscleName}>{muscle.name}</Text>

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{muscle.region}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.label}>Composição:</Text>
                            <Text style={styles.value}>{muscle.composition}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.label}>Ação/Função:</Text>
                            <Text style={styles.value}>{muscle.action}</Text>
                        </View>

                        <View style={styles.textRow}>
                            <Text style={styles.label}>Plano:</Text>
                            <Text style={styles.value}>{muscle.plane}</Text>
                        </View>

                        <Text style={styles.exercisesTitle}>Principais Exercícios</Text>
                        {muscle.exercises.map((ex, idx) => (
                            <Text key={idx} style={styles.exerciseItem}>
                                • {ex.name}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
            <Footer />
        </Page>

        {/* PLANOS E MOVIMENTOS */}
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Planos Anatômicos</Text>
            </View>

            <View style={styles.grid}>
                {PLANES.map((plane) => (
                    <View key={plane.id} style={styles.gridItem} wrap={false}>
                        <Text style={styles.gridTitle}>{plane.name}</Text>
                        <View style={styles.textRow}>
                            <Text style={styles.label}>Eixo:</Text>
                            <Text style={styles.value}>{plane.axis}</Text>
                        </View>
                        <View style={styles.textRow}>
                            <Text style={styles.label}>Divisão:</Text>
                            <Text style={styles.value}>{plane.division}</Text>
                        </View>
                        <Text style={{ fontSize: 10, color: '#475569', marginTop: 5, marginBottom: 5 }}>{plane.description}</Text>
                        <Text style={{ fontSize: 9, color: '#64748b' }}>Movimentos: {plane.movements.join(', ')}</Text>
                    </View>
                ))}
            </View>

            <View wrap={false}>
                <View style={[styles.header, { marginTop: 10 }]}>
                    <Text style={styles.headerTitle}>Movimentos Articulares</Text>
                </View>

                <View style={styles.grid}>
                    {MOVEMENTS.map((mov, idx) => (
                        <View key={idx} style={styles.movItem} wrap={false}>
                            <Text style={styles.movName}>{mov.name}</Text>
                            <Text style={styles.movPlane}>{mov.plane}</Text>
                            <Text style={styles.movDesc}>{mov.desc}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <Footer />
        </Page>
    </Document>
);
