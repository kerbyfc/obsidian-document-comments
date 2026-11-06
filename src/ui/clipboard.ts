import { Notice } from "obsidian";

/** Put the bare comment id on the clipboard, e.g. for `track show <id>`. */
export const copyCommentId = async (id: string): Promise<void> => {
	try {
		await navigator.clipboard.writeText(id);
		new Notice(`Copied comment id ${id}`);
	} catch (error) {
		new Notice(`Couldn't copy the comment id: ${error instanceof Error ? error.message : String(error)}`);
	}
};

/** After a create: copy the new comment's id. An empty id means nothing was written. */
export const copyCreatedCommentId = (id: string): void => {
	if (id) void copyCommentId(id);
};
