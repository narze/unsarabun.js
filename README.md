# UnSarabun

UnSarabun is a command line utility for converting Thai numerals to Arabic numerals in text files. It uses a regular expression to match Thai numerals and replaces them with their equivalent Arabic numerals. UnSarabun reverts what Sarabun IT๙ did.

## Usage

To use UnSarabun, open your terminal and navigate to the directory that contains the text files you want to convert. You can then run the `unsarabun` command followed by the name of the file or a glob pattern that matches the files you want to convert. For example:

```sh
npx unsarabun file.txt
```

This command will convert Thai numerals to Arabic numerals in `file.txt` and save the modified contents back to the same file. If you want to convert multiple files, you can use a glob pattern. For example:

```
npx unsarabun "*.txt"
```

This command will convert Thai numerals to Arabic numerals in all text files with a `.txt` extension in the current directory and its subdirectories.

After running the command, UnSarabun will print a message for each file that it modifies. The message includes the name of the file and the number of characters that were changed.

## Credits

UnSarabun was created by Manassarn Manoonchai and is licensed under the MIT License.

## Contributing

If you find a bug or want to suggest a new feature, please create an issue on the GitHub repository. Pull requests are also welcome.

## Support

If you have any questions or need help using UnSarabun, please create an issue on the GitHub repository.

The code, and the readme is generated by ChatGPT (https://shareg.pt/2wWvHbH)
