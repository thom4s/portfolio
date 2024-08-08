// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ProjetDocumentDataSlicesSlice = ProjetIdSlice;

/**
 * Content for Projet documents
 */
interface ProjetDocumentData {
	/**
	 * Slice Zone field in *Projet*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ProjetDocumentDataSlicesSlice> /**
	 * Meta Title field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: projet.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: projet.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Projet*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Projet document from Prismic
 *
 * - **API ID**: `projet`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjetDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<ProjetDocumentData>,
	'projet',
	Lang
>;

export type AllDocumentTypes = ProjetDocument;

/**
 * Default variation for ProjetId Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjetIdSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	never
>;

/**
 * Slice variation for *ProjetId*
 */
type ProjetIdSliceVariation = ProjetIdSliceDefault;

/**
 * ProjetId Shared Slice
 *
 * - **API ID**: `projet_id`
 * - **Description**: ProjetId
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjetIdSlice = prismic.SharedSlice<'projet_id', ProjetIdSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			ProjetDocument,
			ProjetDocumentData,
			ProjetDocumentDataSlicesSlice,
			AllDocumentTypes,
			ProjetIdSlice,
			ProjetIdSliceVariation,
			ProjetIdSliceDefault
		};
	}
}