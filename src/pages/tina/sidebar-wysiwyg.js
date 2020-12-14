import { withTina, useForm, usePlugin, useCMS } from 'tinacms'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'

function Index() {
    const cms = useCMS();
    cms.plugins.add(MarkdownFieldPlugin);

    const formConfig = {
        id: 'editor',
        initialValues: {
            text: 'hello!'
        },
        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'markdown'
            }
        ],
    };

    const [modifiedValues, form] = useForm(formConfig);
    usePlugin(form);

    // should render markdown
    return <p>{modifiedValues.text}</p>
}

export default withTina(Index, {
    enabled: true,
    sidebar: true,
    toolbar: true
})