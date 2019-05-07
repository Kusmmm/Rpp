using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace планировщик
{
    public partial class Form1 : Form
    {
        public static List<Panel> listPanel = new List<Panel>();
        public Form1()
        {
            InitializeComponent();
            Console.Write("init...");

            panel1.VerticalScroll.Value = 0;
            panel1.Controls.Clear();
            foreach (var panel in listPanel)
            {
                panel1.Controls.Add(panel);
            }
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            string text = textBox1.Text;
            MessageBox.Show(text);
        }



        private void Button2_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
        }

        private void Button3_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            listPanel.Clear();
        }



        private void Button4_Click(object sender, EventArgs e)
        {
            Form2 settingsForm = new Form2();
            this.Hide();
            settingsForm.Show();
        }

        private void ToolStripContainer1_ContentPanel_Load(object sender, EventArgs e)
        {

        }

        private void ToolStripContainer1_TopToolStripPanel_Click(object sender, EventArgs e)
        {

        }
    }
}
