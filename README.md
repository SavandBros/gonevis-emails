# GoNevis Email Templates

The repository for [GoNevis.com](https://www.gonevis.com) email templates.

All the emails in this repository are meant to be used by GoNevis backend and not be used as a standalolone package. 
None of the templates are suitable for sending unless css inlines and properly cleaned up via backend.

Making the CSS inlines is being taken care of when pulling them into backend repository.

#### Consider the following before making any changes:

* All the text to user should be marked with `{% trans %}` or `{% blocktrans %}`.
* The default language is English.
* Don't change the directories.
* Don't rename the files or directories.
* Don't attempt to write unit tests.

#### License

GoNevis Email Templates is distributed under GNU General Public License v3.0.
You may find complete information about this licesne in the [LICENSE](LICENSE) file or https://www.gnu.org/licenses/gpl-3.0.en.html.
