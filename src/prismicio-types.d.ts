// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Friends documents
 */
interface FriendsDocumentData {
	/**
	 * Name field in *Friends*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: friends.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Website field in *Friends*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: friends.website
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	website: prismic.LinkField;
}

/**
 * Friends document from Prismic
 *
 * - **API ID**: `friends`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FriendsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<FriendsDocumentData>,
	'friends',
	Lang
>;

type ProjetDocumentDataSlicesSlice = never;

/**
 * Content for Projet documents
 */
interface ProjetDocumentData {
	/**
	 * Client field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.client
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	client: prismic.KeyTextField;

	/**
	 * Details field in *Projet*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.details
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	details: prismic.RichTextField;

	/**
	 * Cover Full field in *Projet*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.cover_full
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	cover_full: prismic.ImageField<'mobile'>;

	/**
	 * Cover Square field in *Projet*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.cover_square
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	cover_square: prismic.ImageField<'mobile'>;

	/**
	 * Date field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	date: prismic.KeyTextField;

	/**
	 * Mission field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.mission
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	mission: prismic.KeyTextField;

	/**
	 * Skills field in *Projet*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.skills
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	skills: prismic.KeyTextField;

	/**
	 * Link field in *Projet*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet.link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

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

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Actualités field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.news
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	news: prismic.RichTextField;

	/**
	 * Présentation field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.tagline
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	tagline: prismic.RichTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = FriendsDocument | ProjetDocument | SettingsDocument;

/**
 * Primary content in *ProjetId → Default → Primary*
 */
export interface ProjetIdSliceDefaultPrimary {
	/**
	 * Name field in *ProjetId → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet_id.default.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Client field in *ProjetId → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet_id.default.primary.client
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	client: prismic.KeyTextField;

	/**
	 * Link field in *ProjetId → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projet_id.default.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for ProjetId Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjetIdSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ProjetIdSliceDefaultPrimary>,
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
			FriendsDocument,
			FriendsDocumentData,
			ProjetDocument,
			ProjetDocumentData,
			ProjetDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			ProjetIdSlice,
			ProjetIdSliceDefaultPrimary,
			ProjetIdSliceVariation,
			ProjetIdSliceDefault
		};
	}
}
