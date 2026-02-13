import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";

const serviceKeys = [
  "chronic",
  "child",
  "women",
  "skin",
  "allergy",
  "stress",
  "hair",
  "wellness",
];

const Appointment = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    service: "",
    date: "",
    time: "",
    message: "",
    langPref: language === "ta" ? "Tamil" : "English",
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    const whatsappNumber = "91XXXXXXXXXX"; // Replace with actual number
    const message = `Hello Raphael Homoeocare!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AAge: ${form.age}%0AService: ${form.service}%0ADate: ${form.date}%0ATime: ${form.time}%0ALanguage: ${form.langPref}%0AMessage: ${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    toast.success(t("appointment.success"));
    setTimeout(() => window.open(url, "_blank"), 800);
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-mint/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("appointment.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("appointment.subtitle")}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.name")} *
              </label>
              <Input
                placeholder={t("appointment.name")}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.phone")} *
              </label>
              <Input
                placeholder={t("appointment.phone")}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.email")}
              </label>
              <Input
                type="email"
                placeholder={t("appointment.email")}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.age")}
              </label>
              <Input
                type="number"
                placeholder={t("appointment.age")}
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                className="rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {t("appointment.service")}
            </label>
            <Select
              value={form.service}
              onValueChange={(v) => update("service", v)}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder={t("appointment.service")} />
              </SelectTrigger>
              <SelectContent>
                {serviceKeys.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t(`services.${key}.title`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.date")}
              </label>
              <Input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {t("appointment.time")}
              </label>
              <Input
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {t("appointment.message")}
            </label>
            <Textarea
              placeholder={t("appointment.message")}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              {t("appointment.lang")}
            </label>
            <Select
              value={form.langPref}
              onValueChange={(v) => update("langPref", v)}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Tamil">தமிழ்</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl text-base shadow-lg"
          >
            {t("appointment.submit")}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Appointment;
