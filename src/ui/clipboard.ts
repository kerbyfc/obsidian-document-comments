import { Notice } from "obsidian";

/** Marks a comment id the way `^` marks a block label: `@75t71`. */
export const COMMENT_ID_PREFIX = "@";

/** Put the prefixed comment id on the clipboard, e.g. for `track show @<id>`. */
export const copyCommentId = async (id: string): Promise<void> => {
	const ref = `${COMMENT_ID_PREFIX}${id}`;
	try {
		await navigator.clipboard.writeText(ref);
		new Notice(`Copied comment id ${ref}`);
	} catch (error) {
		new Notice(`Couldn't copy the comment id: ${error instanceof Error ? error.message : String(error)}`);
	}
};

/** After a create: copy the new comment's id. An empty id means nothing was written. */
export const copyCreatedCommentId = (id: string): void => {
	if (id) void copyCommentId(id);
};
