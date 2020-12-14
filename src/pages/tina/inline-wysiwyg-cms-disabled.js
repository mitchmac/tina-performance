import { withTina, useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm } from 'react-tinacms-inline'
import { InlineWysiwyg } from 'react-tinacms-editor'

function Index() {
    const cms = useCMS();
    const formConfig = {
        id: 'editor',
        initialValues: {
            text: 'hello!'
        },
        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'textarea'
            }
        ],
    };

    const [modifiedValues, form] = useForm(formConfig);
    usePlugin(form);
    //@TODO: transform markdown
    return <InlineForm form={form}><p><InlineWysiwyg name="text" format="markdown">{modifiedValues.text}</InlineWysiwyg></p></InlineForm>
}

export default withTina(Index, {
    enabled: false,
    sidebar: true,
    toolbar: true
})